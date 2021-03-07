use tokio_postgres::Error;

use crate::app_utils::get_async_connection;
use crate::models::ProducerDB;
use crate::queries;

use super::utils::gather_producers;

pub async fn handle_producer_list() -> Result<Vec<ProducerDB>, Error> {
    let raw_query = queries::get_producer_list();
    let rows_future = get_async_connection(raw_query);

    match rows_future.await {
        Err(tokio_error) => return Err(tokio_error),
        Ok(rows) => {
            let empty_list = Vec::new();
            return gather_producers(rows, empty_list);
        }
    }
}
