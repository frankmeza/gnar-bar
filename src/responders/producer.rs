use actix_web::{HttpResponse, Responder};

use crate::{
    handlers::handle_producer_list,
    models::{transform_producer, ErrorResponse},
};

fn return_http_error(
    err: tokio_postgres::Error,
    method_name: String,
) -> HttpResponse {
    return HttpResponse::ServiceUnavailable().json(ErrorResponse {
        message: format!("ERROR: {} {:?}", method_name, err),
    });
}

pub async fn fetch_producer_list() -> impl Responder {
    let producer_list = handle_producer_list();

    match producer_list.await {
        Err(error) => {
            return_http_error(error, String::from("fetch_producer_list"))
        }
        // Err(error) => HttpResponse::ServiceUnavailable().json(ErrorResponse {
        //     message: format!("ERROR: fetch_producer_list {:?}", error),
        // }),
        Ok(list) => {
            // list.
            // list map through with transform_producer, return in json
            // let producers = list transform_producer
            HttpResponse::Ok().json(list)
        }
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
