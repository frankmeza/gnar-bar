use std::io;
use tokio_postgres::{row::Row, Error};

use crate::{
    db,
    models::{app::Snack, db::SnackDB, transformers},
    queries,
};

pub async fn get_snacks() -> Result<Vec<Snack>, io::Error> {
    let client = db::connect().await?;

    let statement = client
        .prepare_typed(&queries::snack::get_all_snacks(), &[])
        .await
        .expect("get_snacks: error writing SQL statement");

    let rows = &client
        .query(&statement, &[])
        .await
        .expect("get_snacks: error getting rows");

    let snacks_db = gather_snacks(&rows, Vec::new())
        .expect("get_snacks: error with snacks_db");

    let snacks = snacks_db
        .iter()
        .map(|s| transformers::transform_snack(s))
        .collect();

    return Ok(snacks);
}

pub fn gather_snacks(
    rows: &Vec<Row>,
    mut snack_list: Vec<SnackDB>,
) -> Result<Vec<SnackDB>, Error> {
    for r in rows {
        let s = SnackDB {
            id: r.get(0),
            producer_id: r.get(1),
            name: r.get(2),
            kind: r.get(3),
            cost: r.get(4),
            is_dairy: r.get(5),
            is_vegetarian: r.get(6),
            created_at: r.get(7),
            updated_at: r.get(8),
        };

        snack_list.push(s);
    }

    return Ok(snack_list);
}
