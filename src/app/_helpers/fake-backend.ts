import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// array in local storage for registered users
// tslint:disable-next-line:prefer-const
let users = JSON.parse(localStorage.getItem('users')) || [];
let items = JSON.parse(localStorage.getItem('items')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.endsWith('/consumers') && method === 'GET':
                    return getConsumers();
                case url.endsWith('/suppliers') && method === 'GET':
                    return getSuppliers();
                case url.endsWith('/items') && method === 'GET':
                    return getItems();
                case url.endsWith('/items') && method === 'POST':
                    return addItem();
                case url.match(/\/items\/\d+$/) && method === 'DELETE':
                    return deleteItem();
                case url.match('/items/featured') && method === 'GET':
                    return getTopItems();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        // User Functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) { return error('Username or password is incorrect'); }
            return ok({
                id: user.id,
                username: user.username,
                role: user.role,
                token: 'fake-jwt-token'
            });
        }

        function register() {
            const user = body;

            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken');
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            return ok();
        }

        function getUsers() {
            if (!isLoggedIn()) { return unauthorized(); }
            return ok(users);
        }

        function getConsumers() {
            const consumers = users.filter(x => x.role === 'Consumer');
            return ok(consumers);
        }

        function getSuppliers() {
            const suppliers = users.filter(x => x.role === 'Supplier');
            return ok(suppliers);
        }

        // inventory functions

        function getItems() {
            if (!isLoggedIn()) { return unauthorized(); }
            return ok(items);
        }

        function addItem() {
            if (!isLoggedIn()) { return unauthorized(); }
            const item = body;

            if (items.find(x => x.name === item.name)) {
                return error('"' + item.name + '" is already a listed item');
            }

            item.id = items.length ? Math.max(...items.map(x => x.id)) + 1 : 1;
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));

            return ok();
        }

        function deleteItem() {
            if (!isLoggedIn()) { return unauthorized(); }

            items = items.filter(x => x.id !== idFromUrl());
            localStorage.setItem('items', JSON.stringify(items));
            return ok();
        }

        function getTopItems() {
            if (!isLoggedIn()) { return unauthorized(); }

            const list = items.filter(x => x.id <= 5);
            return ok(list);
        }

        // helper functions

        // tslint:disable-next-line:no-shadowed-variable
        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            // tslint:disable-next-line: radix
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
