use actix_web::{HttpResponse, Responder};

use crate::{
    handlers::handle_producer_list,
    models::{transform_producer, ErrorResponse, Producer},
};

fn http_error(
    err: tokio_postgres::Error,
    method_name: String,
) -> HttpResponse {
    return HttpResponse::ServiceUnavailable().json(ErrorResponse {
        message: format!("ERROR: {} {:?}", method_name, err),
    });
}

pub async fn fetch_producer_list() -> impl Responder {
    let producer_list = handle_producer_list();

    let responder = match producer_list.await {
        Err(error) => {
            println!("got here error");
            http_error(error, String::from("fetch_producer_list"))
        },
        Ok(list) => {
            println!("got here ok");
            let iterator = list.into_iter();
            let mut collected: Vec<Producer> = [].to_vec();

            for (_, item) in iterator.enumerate() {
                collected.push(transform_producer(item));
            };

            HttpResponse::Ok().json(collected)
        },
    };

    println!("producer_list: {:?}", &responder);
    return responder;
}
