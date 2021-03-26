// use tokio::{runtime};
use tokio_postgres::{Error, NoTls, Row};

pub async fn get_async_connection(query_string: String) -> Result<Vec<Row>, Error> {
    // let rt = Runtime::new();
    // let rt = Builder::th
    //     .worker_threads(6)
    //     .thread_name("my thread")
    //     .enable_io()
    //     .build()
    //     .unwrap();
    #[cfg(feature = "rt-threaded")]
    let ret = Builder::new().threaded_scheduler().enable_all().build();

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

    return Ok(rows);
}