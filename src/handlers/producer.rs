use actix_web::{get, HttpResponse};

use crate::services;

#[get("/producers")]
pub async fn fetch_producer_list() -> HttpResponse {
    let pp = services::get_producers().await;

    let response = match pp {
        Err(_err) => HttpResponse::Ok().json("err"), // todo fix for 404
        Ok(p) => HttpResponse::Ok().json(p),
    };

    return response;
}
