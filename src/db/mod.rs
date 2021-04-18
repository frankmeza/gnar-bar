use tokio;
use tokio_postgres::NoTls;
use std::io;

pub async fn connect() -> Result<tokio_postgres::Client, io::Error> {
    let connection_url = "host=localhost port=5432 user=postgres dbname=frankmeza sslmode=disable";

    let (client, connection) = match tokio_postgres::connect(connection_url, NoTls).await {
        Err(err) => {
            panic!(err);
        }
        Ok((client, connection)) => (client, connection)
    };

    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

    return Ok(client);
}
