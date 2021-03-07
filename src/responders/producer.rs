use actix_web::{HttpResponse, Responder};

use crate::{handlers::handle_producer_list, models::ErrorResponse};

pub async fn fetch_producer_list() -> impl Responder {
    let producer_list = handle_producer_list();

    match producer_list.await {
        Err(error) => HttpResponse::ServiceUnavailable().json(ErrorResponse {
            message: format!("ERROR: fetch_producer_list {:?}", error),
        }),
        Ok(list) => HttpResponse::Ok().json(list),
    }
}

// pub async fn fetch_producer_list() -> impl Responder {
//     // straight from DB
//     let producer_list = handle_producer_list();

//     match producer_list.await {
//         Err(error) => HttpResponse::ServiceUnavailable().json(ErrorResponse {
//             message: format!("ERROR: fetch_producer_list {:?}", error),
//         }),
//         Ok(list) => HttpResponse::Ok().json(list),
//     }
// }
