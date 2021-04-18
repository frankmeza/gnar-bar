use actix_cors::Cors;
use actix_web::{get, http::header, App, HttpRequest, HttpResponse, HttpServer, Responder};
use serde_derive::{Serialize};
use tokio;
use tokio_postgres::NoTls;

mod dao;
mod db;
mod models;
mod responders;
mod services;

#[get("/")]
async fn greet(req: HttpRequest) -> impl Responder {
    let name = req.match_info().get("name").unwrap_or("World");
    format!("Hello {}!", &name)
}

// #[derive(Serialize)]
// struct Producer {
//     pub name: String,
// }

// // service
// async fn get_producers() -> Option<Producer> {
//     return producer_dao_get_producers().await;
// }

// // connection
// async fn connect() -> Option<tokio_postgres::Client> {
//     let connection_url = "host=localhost port=5432 user=postgres dbname=frankmeza sslmode=disable";

//     let (client, connection) =
//         tokio_postgres::connect(connection_url, NoTls).await.unwrap();

//     tokio::spawn(async move {
//         if let Err(e) = connection.await {
//             eprintln!("connection error: {}", e);
//         }
//     });
//     println!("{:?}", &client);
//     return Some(client);
// }

// // dao
// async fn producer_dao_get_producers() -> Option<Producer> {
//     let client = connect().await?;
//     let rows = &client.query("SELECT * from producers;", &[]).await.unwrap();
//     let first_row = rows.get(0).unwrap();

//     return Some(Producer {
//         name: first_row.get(2),
//      });
// }

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    let server = HttpServer::new(move || {
        return App::new()
            .wrap(
                Cors::new()
                .allowed_origin("http://localhost:10001")
                .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
                .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
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
