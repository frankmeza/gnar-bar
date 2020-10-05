use crate::handlers::ApiResponse;
use crate::user::User;
use rocket::http::Status;
use rocket_contrib::json::Json;

pub fn create_new_user(user_params: Json<User>) -> ApiResponse {
    let user = User {
        ..user_params.into_inner()
    };

    return ApiResponse {
        json: json!(user),
        status: Status::Ok,
    };
}
