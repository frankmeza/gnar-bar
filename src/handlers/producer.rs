use crate::{models::app::Producer, services, utils};
use actix_web::{get, HttpResponse};
use serde_derive::Serialize;

#[derive(Serialize)]
struct ProducersResponse {
    producers: Vec<Producer>,
    sent_at: i64,
}

#[get("/producers")]
pub async fn fetch_producer_list() -> HttpResponse {
    let producers = services::get_producers().await;

    let response = match producers {
        Err(_) => HttpResponse::NotFound().finish(),
        Ok(producers) => HttpResponse::Ok().json(ProducersResponse {
            producers,
            sent_at: utils::time::get_timestamp(),
        }),
    };

    return response;
}
