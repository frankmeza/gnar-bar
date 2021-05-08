use crate::{models::app::Wine, services, utils};
use actix_web::{get, HttpResponse};
use serde_derive::Serialize;

#[derive(Serialize)]
struct WinesResponse {
    wines: Vec<Wine>,
    sent_at: i64,
}

#[get("/wines")]
pub async fn fetch_wine_list() -> HttpResponse {
    let wines = services::get_wines().await;

    let response = match wines {
        Err(_) => HttpResponse::NotFound().finish(),
        Ok(wines) => HttpResponse::Ok().json(WinesResponse {
            wines,
            sent_at: utils::time::get_timestamp(),
        }),
    };

    return response;
}
