#![feature(proc_macro_hygiene)]
#![feature(decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate rocket_contrib;
extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;

use rocket::http::{ContentType, Status};
use rocket::request::Request;
use rocket::response;
use rocket::response::{Responder, Response};
use rocket_contrib::json::{JsonValue};

#[derive(Debug, Deserialize, Serialize)]
struct User {
    pub name: String,
    pub age: i32,
}

#[derive(Debug)]
struct ApiResponse {
    json: JsonValue,
    status: Status,
}

impl<'r> Responder<'r> for ApiResponse {
    fn respond_to(self, req: &Request) -> response::Result<'r> {
        return Response::build_from(self.json.respond_to(&req).unwrap())
            .status(self.status)
            .header(ContentType::JSON)
            .ok();
    }
}

#[get("/")]
fn index() -> ApiResponse {
    let user = User {
        name: String::from("frank "),
        age: 37,
    };

    return ApiResponse {
        json: json!(user),
        status: Status::Ok,
    };
}

fn main() {
    rocket::ignite().mount("/", routes![index]).launch();
}
