use actix_web::{get, HttpResponse};

use crate::services;

#[get("/producers")]
pub async fn fetch_producer_list() -> HttpResponse {
    let producers = services::get_producers().await;

    let response = match producers {
        Err(_) => HttpResponse::NotFound().finish(),
        Ok(producers) => HttpResponse::Ok().json(producers),
    };

    return response;
}
