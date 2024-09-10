#!/bin/bash

# ตรวจสอบว่ามีอาร์กิวเมนต์หรือไม่
if [ "$#" -eq 0 ]; then
    echo "Error: No arguments provided."
    exit 1
fi

# สร้างโฟลเดอร์ใหม่ด้วยการเพิ่ม "ex" ไปที่ชื่อ
for arg in "$@"; do
    folder_name="ex$arg"
    mkdir -p "$folder_name"
    echo "Created folder: $folder_name"
done
