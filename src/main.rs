use actix_cors::Cors;
use actix_web::{http::header, App, HttpServer};

mod dao;
mod db;
mod handlers;
mod models;
mod queries;
mod services;

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
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
            .service(handlers::fetch_producer_list);
    })
    .bind(("127.0.0.1", 8080))?
    .run();

    return server.await;
}
