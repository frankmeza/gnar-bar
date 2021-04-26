use super::{app::Producer, db::ProducerDB};

pub fn transform_producer(p: &ProducerDB) -> Producer {
    return Producer {
        name: (*p.name).to_string(),
        city: (*p.city).to_string(),
        country: (*p.country).to_string(),
        is_brewery: p.is_brewery,
        is_kitchen: p.is_kitchen,
        is_winery: p.is_winery,
        // created_at
        // updated_at
    };
}
