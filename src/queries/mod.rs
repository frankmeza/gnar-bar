pub mod producer {
    pub fn get_all_producers() -> String {
        return "SELECT * from producers;".to_string();
    }
}
