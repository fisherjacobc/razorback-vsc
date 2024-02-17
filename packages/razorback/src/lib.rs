use builtin::register_tags;
use wasm_bindgen::prelude::wasm_bindgen;
use wasm_bindgen::JsValue;

use crate::interpreter::Interpreter;
use crate::parser::*;
use crate::register::EngineRegister;

mod builtin;
mod error;
mod interpreter;
mod parser;
mod register;
mod serializer;
mod types;

#[wasm_bindgen]
pub fn parse(text: &str) -> JsValue {
    // setup register
    let mut register = EngineRegister::new();
    register_tags(&mut register);

    // parse script
    let script = parse_to_node(text).unwrap();
    println!("{:?}", script);

    let jsValue = serde_wasm_bindgen::to_value(&script).unwrap();

    return jsValue;
}
