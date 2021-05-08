use actix_cors::Cors;
use actix_web::{http::header, App, HttpServer};
use std::io::Result;

mod dao;
mod db;
mod handlers;
mod models;
mod queries;
mod services;
mod utils;

#[actix_rt::main]
async fn main() -> Result<()> {
    let server = HttpServer::new(move || {
        return App::new()
            .wrap(
                Cors::new()
                    .allowed_headers(vec![
                        header::AUTHORIZATION,
                        header::ACCEPT,
                    ])
                    .allowed_header(header::CONTENT_TYPE)
                    .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
                    .allowed_origin("http://localhost:3000")
                    .max_age(3600)
                    .finish(),
            )
            .service(handlers::fetch_beer_list)
            .service(handlers::fetch_producer_list)
            .service(handlers::fetch_snack_list);
    })
    .bind(("127.0.0.1", 8080))?
    .run();

    return server.await;
}
