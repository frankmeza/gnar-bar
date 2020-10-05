use rocket::http::ContentType;
use rocket::http::Status;
use rocket::request::Request;
use rocket::response::{Responder, Response, Result};
use rocket_contrib::json::JsonValue;
// local modules
use crate::user::User;
// pub declared modules
pub mod user;

#[derive(Debug)]
pub struct ApiResponse {
    pub json: JsonValue,
    pub status: Status,
}

impl<'r> Responder<'r> for ApiResponse {
    fn respond_to(self, req: &Request) -> Result<'r> {
        return Response::build_from(self.json.respond_to(&req)?)
            .status(self.status)
            .header(ContentType::JSON)
            .ok();
    }
}

pub fn get_health() -> ApiResponse {
    return ApiResponse {
        json: json!({"hella_lit": "true"}),
        status: Status::Ok,
    };
}

pub fn get_index() -> ApiResponse {
    let user = User {
        name: String::from("frank "),
        age: 37,
    };

    return ApiResponse {
        json: json!(user),
        status: Status::Ok,
    };
}
