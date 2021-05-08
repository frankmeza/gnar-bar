pub mod beer {
    pub fn get_all_beers() -> String {
        return "SELECT * from beers;".to_string();
    }
}

pub mod producer {
    pub fn get_all_producers() -> String {
        return "SELECT * from producers;".to_string();
    }
}

pub mod snack {
    pub fn get_all_snacks() -> String {
        return "SELECT * from snacks;".to_string();
    }
}
