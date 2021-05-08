use std::io;
use tokio_postgres::{row::Row, Error};

use crate::{
    db,
    models::{app::Beer, db::BeerDB, transformers},
    queries,
};

pub async fn get_beers() -> Result<Vec<Beer>, io::Error> {
    let client = db::connect().await?;

    let statement = client
        .prepare_typed(&queries::beer::get_all_beers(), &[])
        .await
        .expect("get_beers: error writing SQL statement");

    let rows = &client
        .query(&statement, &[])
        .await
        .expect("get_beers: error getting rows");

    let beers_db = gather_beers(&rows, Vec::new())
        .expect("get_beers: error with beers_db");

    let beers = beers_db
        .iter()
        .map(|s| transformers::transform_beer(s))
        .collect();

    return Ok(beers);
}

pub fn gather_beers(
    rows: &Vec<Row>,
    mut beer_list: Vec<BeerDB>,
) -> Result<Vec<BeerDB>, Error> {
    for r in rows {
        let s = BeerDB {
            id: r.get(0),
            producer_id: r.get(1),
            name: r.get(2),
            color: r.get(3),
            kind: r.get(4),
            finish: r.get(5),
            abv: r.get(6),
            cost: r.get(7),
            volume: r.get(8),
            created_at: r.get(9),
            updated_at: r.get(10),
        };

        beer_list.push(s);
    }

    return Ok(beer_list);
}
