use actix_web::{get, HttpResponse};

use crate::services;

#[get("/snacks")]
pub async fn fetch_snack_list() -> HttpResponse {
    let snacks = services::get_snacks().await;

    let response = match snacks {
        Err(_) => HttpResponse::NotFound().finish(),
        Ok(snacks) => HttpResponse::Ok().json(snacks),
    };

    return response;
}
