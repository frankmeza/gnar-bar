pub mod time {
    use std::time::{SystemTime, UNIX_EPOCH};

    pub fn get_timestamp() -> i64 {
        let systemtime = SystemTime::now();
        let unix_timestamp = systemtime.duration_since(UNIX_EPOCH).unwrap();

        let timestamp_in_seconds = unix_timestamp.as_secs();
        let as_string: String = timestamp_in_seconds.to_string();

        return as_string.parse::<i64>().unwrap();
    }
}
