// use tokio::*;
use tokio_postgres::{Error, NoTls, Row};

pub async fn get_async_connection(query_string: String) -> Result<Vec<Row>, Error> {
    let connection_url = "postgres://postgres@localhost:5432/gnar_bar";

    let (client, connection) =
        tokio_postgres::connect(connection_url, NoTls).await?;

    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

    let statement = client.prepare_typed(&query_string, &[]).await?;
    let rows = client.query(&statement, &[]).await?;

    Ok(rows)
}