use crate::dao::producer;
use crate::models::app::Producer;

pub async fn get_producers() -> Option<Producer> {
    return producer::producer_dao_get_producers().await;
}

