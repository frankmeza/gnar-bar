use super::{app::Producer, db::ProducerDB};

pub fn transform_producer(p: ProducerDB) -> Producer {
    return Producer {
        name: p.name,
        city: p.city,
        country: p.country,
        produces_beer: p.produces_beer,
        produces_food: p.produces_food,
        produces_wine: p.produces_wine,
    };
}
