#![feature(proc_macro_hygiene)]
#![feature(decl_macro)]

#[macro_use]
extern crate rocket;

#[macro_use]
extern crate rocket_contrib;
use rocket_contrib::json::Json;

extern crate serde;
extern crate serde_derive;
extern crate serde_json;

mod handlers;
use handlers::user as user_handlers;

mod user;
use user::User;

#[get("/health")]
fn health() -> handlers::ApiResponse {
    return handlers::get_health();
}

#[get("/")]
fn index() -> handlers::ApiResponse {
    return handlers::get_index();
}

#[post("/users", format = "json", data = "<user_params>")]
fn new_user(user_params: Json<User>) -> handlers::ApiResponse {
    return user_handlers::create_new_user(user_params);
}

fn main() {
    rocket::ignite()
        .mount("/", routes![health, index, new_user,])
        .launch();
}
