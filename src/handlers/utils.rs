use tokio_postgres::{row::Row, Error};

use crate::models::{ProducerDB};

pub fn gather_producers(
    rows: Vec<Row>,
    mut producer_list: Vec<ProducerDB>,
) -> Result<Vec<ProducerDB>, Error> {
    for r in rows {
        let p = ProducerDB {
             name: r.get(0),
             city: r.get(1),
             country: r.get(2),
             produces_beer: r.get(3),
             produces_food: r.get(4),
             produces_wine: r.get(5),
        };

        producer_list.push(p)
    }

    return Ok(producer_list);
}
