use crate::db;
use crate::models::app::Producer;

pub async fn producer_dao_get_producers() -> Option<Producer> {
    let client = db::connect().await?;
    let rows = &client.query("SELECT * from producers;", &[]).await.unwrap();
    let first_row = rows.get(0).unwrap();

    return Some(Producer {
        name: first_row.get(2),
     });
}
