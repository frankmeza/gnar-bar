use std::io;
use tokio;
use tokio_postgres::NoTls;

pub async fn connect() -> Result<tokio_postgres::Client, io::Error> {
    let connection_url = "host=localhost port=5432 user=postgres dbname=gnar_bar sslmode=disable";

    let (client, connection) = tokio_postgres::connect(connection_url, NoTls)
        .await
        .expect("error getting db client");

    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

    return Ok(client);
}
