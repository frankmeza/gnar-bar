use actix_cors::Cors;
use actix_web::{get, http::header, App, HttpRequest, HttpServer, Responder};

mod dao;
mod db;
mod models;
mod responders;
mod services;

#[get("/")] // todo rm
async fn greet(req: HttpRequest) -> impl Responder {
    let name = req.match_info().get("name").unwrap_or("World");
    format!("Hello {}!", &name)
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    let server = HttpServer::new(move || {
        return App::new()
            .wrap(
                Cors::new()
                    .allowed_origin("http://localhost:10001")
                    .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
                    .allowed_headers(vec![
                        header::AUTHORIZATION,
                        header::ACCEPT,
                    ])
                    .allowed_header(header::CONTENT_TYPE)
                    .max_age(3600)
                    .finish(),
            )
            .service(greet)
            .service(responders::fetch_producer_list);
    })
    .bind(("127.0.0.1", 8080))?
    .run();

    return server.await;
}
