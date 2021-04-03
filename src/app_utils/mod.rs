use actix_web::*;
use exitfailure::ExitFailure;
use std::sync::*;
use tokio_postgres::{Client, Error, NoTls, Row};

pub struct MyClient {
    pub client: Client,
}

pub async fn get_client() -> Result<MyClient, ExitFailure> {
    let connection_url = "postgres://postgres@localhost:5432/gnar_bar";

    let (client, connection) =
        tokio_postgres::connect(connection_url, NoTls).await?;

    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

    return Ok(MyClient {
        client,
    });
}

pub async fn get_async_connection(
    query_string: String,
) -> Result<Vec<Row>, Error> {
    let client = match get_client().await {
        Err(e) => {
            panic!("error {:?}", e)
        }
        Ok(cl) => Arc::new(Mutex::new(cl)),
    };

    let c = client.lock().unwrap();
    let statement = c.client.prepare_typed(&query_string, &[]).await?;
    let rows = c.client.query(&statement, &[]).await?;

    return Ok(rows);
}
