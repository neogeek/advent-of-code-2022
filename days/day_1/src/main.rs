use regex::Regex;
use std::collections::HashMap;
use std::fs;

fn main() {
    let puzzle_input =
        fs::read_to_string("input.txt").expect("Should be able to load the puzzle input.");

    let group_re = Regex::new(r"\n{2,}").unwrap();
    let item_re = Regex::new(r"\n").unwrap();

    let mut elfs = HashMap::new();

    let mut index = 1;

    for group in group_re.split(&puzzle_input) {
        elfs.insert(index, item_re.split(group));

        index += 1;
    }
}
