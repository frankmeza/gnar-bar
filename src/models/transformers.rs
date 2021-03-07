use db;

pub fn transform_producer(producer_db: db::ProducerDB) Producer -> {
    return Producer {
        name: producer_db.name;
        city: producer_db.city;
        country: producer_db.country;
        produces_beer: producer_db.produces_beer;
        produces_food: producer_db.produces_food;
        produces_wine: producer_db.produces_wine;
    };
}