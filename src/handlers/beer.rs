use crate::{models::app::Beer, services, utils};
use actix_web::{get, HttpResponse};
use serde_derive::Serialize;

#[derive(Serialize)]
struct BeersResponse {
    beers: Vec<Beer>,
    sent_at: i64,
}

#[get("/beers")]
pub async fn fetch_beer_list() -> HttpResponse {
    let beers = services::get_beers().await;

    let response = match beers {
        Err(_) => HttpResponse::NotFound().finish(),
        Ok(beers) => HttpResponse::Ok().json(BeersResponse {
            beers,
            sent_at: utils::time::get_timestamp(),
        }),
    };

    return response;
}
