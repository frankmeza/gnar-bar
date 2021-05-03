use crate::{models::app::Snack, services, utils};
use actix_web::{get, HttpResponse};
use serde_derive::Serialize;

#[derive(Serialize)]
struct SnacksResponse {
    snacks: Vec<Snack>,
    sent_at: i64,
}

#[get("/snacks")]
pub async fn fetch_snack_list() -> HttpResponse {
    let snacks = services::get_snacks().await;

    let response = match snacks {
        Err(_) => HttpResponse::NotFound().finish(),
        Ok(snacks) => HttpResponse::Ok().json(SnacksResponse {
            snacks,
            sent_at: utils::time::get_timestamp(),
        }),
    };

    return response;
}
