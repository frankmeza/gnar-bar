use super::{
    app::{Producer, Snack},
    db::{ProducerDB, SnackDB},
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
        created_at: p.created_at,
        updated_at: p.updated_at,
    };
}

pub fn transform_snack(s: &SnackDB) -> Snack {
    return Snack {
        id: copy_to_string(&s.id),
        producer_id: copy_to_string(&s.producer_id),
        cost: s.cost,
        name: copy_to_string(&s.name),
        kind: copy_to_string(&s.kind),
        is_dairy: s.is_dairy,
        is_vegetarian: s.is_vegetarian,
        created_at: s.created_at,
        updated_at: s.updated_at,
    };
}
