use super::{app::Producer, db::ProducerDB};

pub fn transform_producer(p: &ProducerDB) -> Producer {
    return Producer {
        name: (*p.name).to_string(),
        city: (*p.city).to_string(),
        country: (*p.country).to_string(),
        produces_beer: p.produces_beer,
        produces_food: p.produces_food,
        produces_wine: p.produces_wine,
    };
}
