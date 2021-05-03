# DATABASE NOTES

A living document about the postgres database for this app.

## DATABASE TABLES DESCRIPTIONS

### PRODUCERS

```sql
CREATE TABLE producers (
    id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    city character varying(255) NOT NULL,
    state character varying(255) NOT NULL,
    country character varying(255) NOT NULL,
    is_brewery boolean NOT NULL,
    is_kitchen boolean NOT NULL,
    is_winery boolean NOT NULL,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL
);
```

### BEERS

```sql
CREATE TABLE beers (
    id character varying(36) NOT NULL,
    producer_id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    color character varying(255) NOT NULL,
    kind character varying(255) NOT NULL,
    finish character varying(255),
    abv int NOT NULL,
    cost int NOT NULL,
    volume int NOT NULL,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL
);
```

### WINES

```sql 
CREATE TABLE wines (
    id character varying(36) NOT NULL,
    producer_id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    color character varying(255) NOT NULL,
    kind character varying(255) NOT NULL,
    finish character varying(255) NOT NULL,
    abv int NOT NULL,
    cost int NOT NULL,
    volume int NOT NULL,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL
);
```

### SNACKS

```sql
CREATE TABLE snacks (
    id character varying(36) NOT NULL,
    producer_id character varying(36) NOT NULL,
    name character varying(100) NOT NULL,
    kind character varying(255) NOT NULL,
    cost int NOT NULL,
    is_dairy boolean NOT NULL,
    is_vegetarian boolean NOT NULL,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL
);
```

### CUSTOMERS

```sql
CREATE TABLE customers (
    id character varying(36) NOT NULL,
    email character varying(255) NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    last_active_at bigint NOT NULL,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL
);
```

### ORDERS

```sql
CREATE TABLE orders (
    id character varying(36) NOT NULL,
    customer_id character varying(36) NOT NULL,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL
);
```

### ORDER_ITEMS

```sql
CREATE TABLE order_items (
    id character varying(36) NOT NULL,
    order_id character varying(36) NOT NULL,
    item_id character varying(36) NOT NULL,
    quantity int NOT NULL,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL
);
```

### USERS

```sql
CREATE TABLE users (
    id character varying(36) NOT NULL,
    access_level character varying(36) NOT NULL,
    email character varying(255) NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    last_active_at bigint NOT NULL,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL
);
```

### SESSIONS

```sql
CREATE TABLE sessions (
    id character varying(36) NOT NULL,
    user_id character varying(36) NOT NULL,
    last_active_at bigint NOT NULL,
    created_at bigint NOT NULL,
    ended_at bigint NOT NULL
);
```

### ACTIONS

```sql
CREATE TABLE actions (
    id character varying(36) NOT NULL,
    name character varying(255) NOT NULL
);
```

### SESSION_ACTION_ITEMS

```sql
CREATE TABLE session_action_items (
    id character varying(36) NOT NULL,
    action_id character varying(36) NOT NULL,
    item_id character varying(36) NOT NULL,
    session_id character varying(36) NOT NULL,
    created_at bigint NOT NULL
);
```

---

## DATABASE TABLES SEEDING

### PRODUCERS

```sql
INSERT INTO producers (
    id,
    name,
    city,
    state,
    country,
    is_brewery,
    is_kitchen,
    is_winery,
    created_at,
    updated_at
) VALUES (
    '68c3281a-9b4f-4f69-97e7-ef66d57120e3',
    'Tuan Beer',
    'Long Beach',
    'CA',
    'USA',
    TRUE,
    FALSE,
    FALSE,
    0,
    0
);

INSERT INTO producers (
    id,
    name,
    city,
    state,
    country,
    is_brewery,
    is_kitchen,
    is_winery,
    created_at,
    updated_at
) VALUES (
    '88c3281a-9b4f-4f69-97e7-ef66d57120e3',
    'Tuan Kitchen',
    'Long Beach',
    'CA',
    'USA',
    FALSE,
    TRUE,
    FALSE,
    0,
    0
);

INSERT INTO producers (
    id,
    name,
    city,
    state,
    country,
    is_brewery,
    is_kitchen,
    is_winery,
    created_at,
    updated_at
) VALUES (
    '86c3281a-9b4f-4f69-97e7-ef66d57120e3',
    'Tuan Wine',
    'Long Beach',
    'CA',
    'USA',
    FALSE,
    FALSE,
    TRUE,
    0,
    0
);
```

### BEERS

```sql
INSERT INTO beers (
    id,
    producer_id,
    name,
    color,
    kind,
    finish,
    abv,
    cost,
    created_at,
    updated_at,
) VALUES (
    '12c3281a-9b4f-4f69-97e7-ef66d57120e3',
    '68c3281a-9b4f-4f69-97e7-ef66d57120e3',
    'Barley Wine',
    'brown',
    'barley wine',
    'dry',
    17,
    9,
    10
    0,
    0
);
```

### WINES

// todo

### SNACKS

```sql
INSERT INTO snacks (
    id,
    producer_id,
    name,
    kind,
    cost,
    is_dairy,
    is_vegetarian,
    created_at,
    updated_at
) VALUES (
    '68c3281a-9b4f-4f69-97e7-ef66d57120e3',
    '12c3281a-9b4f-4f69-97e7-ef66d57120e3',
    'snack',
    'tastes good',
    5,
    FALSE,
    FALSE,
    0,
    0
);
```


### ORDERS
### ORDER_ITEMS

### CUSTOMERS

// todo

### USERS

// todo

### SESSIONS