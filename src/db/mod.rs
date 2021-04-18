use tokio;
use tokio_postgres::NoTls;

pub async fn connect() -> Option<tokio_postgres::Client> {
    let connection_url = "host=localhost port=5432 user=postgres dbname=frankmeza sslmode=disable";

    let (client, connection) = tokio_postgres::connect(connection_url, NoTls)
        .await
        .unwrap();

    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

    return Some(client);
}
