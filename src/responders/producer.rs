use actix_web::{get, HttpResponse};

use crate::services;

#[get("/producers")]
pub async fn fetch_producer_list() -> HttpResponse {
    let producers = services::get_producers().await;
    return HttpResponse::Ok().json(producers);
}
