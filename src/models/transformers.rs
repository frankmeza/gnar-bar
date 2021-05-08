use super::{
    app::{Beer, Producer, Snack, Wine},
    db::{BeerDB, ProducerDB, SnackDB, WineDB},
};

fn copy_to_string(string: &str) -> String {
    return (*string).to_string();
}

pub fn transform_producer(p: &ProducerDB) -> Producer {
    return Producer {
        name: copy_to_string(&p.name),
        city: copy_to_string(&p.city),
        country: copy_to_string(&p.country),
        is_brewery: p.is_brewery,
        is_kitchen: p.is_kitchen,
        is_winery: p.is_winery,

        id: copy_to_string(&p.id),
        created_at: p.created_at,
        updated_at: p.updated_at,
    };
}

pub fn transform_snack(s: &SnackDB) -> Snack {
    return Snack {
        cost: s.cost,
        is_dairy: s.is_dairy,
        is_vegetarian: s.is_vegetarian,
        kind: copy_to_string(&s.kind),
        name: copy_to_string(&s.name),

        id: copy_to_string(&s.id),
        producer_id: copy_to_string(&s.producer_id),
        created_at: s.created_at,
        updated_at: s.updated_at,
    };
}

pub fn transform_beer(b: &BeerDB) -> Beer {
    return Beer {
        abv: b.abv,
        color: copy_to_string(&b.color),
        cost: b.cost,
        name: copy_to_string(&b.name),
        finish: copy_to_string(&b.finish),
        volume: b.volume,
        kind: copy_to_string(&b.kind),

        id: copy_to_string(&b.id),
        producer_id: copy_to_string(&b.producer_id),
        created_at: b.created_at,
        updated_at: b.updated_at,
    };
}

pub fn transform_wine(w: &WineDB) -> Wine {
    return Wine {
        abv: w.abv,
        color: copy_to_string(&w.color),
        cost: w.cost,
        name: copy_to_string(&w.name),
        finish: copy_to_string(&w.finish),
        volume: w.volume,
        kind: copy_to_string(&w.kind),

        id: copy_to_string(&w.id),
        producer_id: copy_to_string(&w.producer_id),
        created_at: w.created_at,
        updated_at: w.updated_at,
    };
}
