use actix_cors::Cors;
use actix_rt;
use actix_web::{http::header, web, App, HttpRequest, HttpServer, Responder};

mod app_utils;
mod handlers;
mod models;
mod responders;
mod queries;

async fn greet(req: HttpRequest) -> impl Responder {
    let name = req.match_info().get("name").unwrap_or("World");
    format!("Hello {}!", &name)
}

// #[actix_web::main]
#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::default()
            .allowed_origin("http://localhost:10001")
            .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
            .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
            .allowed_header(header::CONTENT_TYPE)
            .max_age(3600);

        App::new()
            .wrap(cors)
            .route("/", web::get().to(greet))
            .route("/producers", web::get().to(responders::fetch_producer_list))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
