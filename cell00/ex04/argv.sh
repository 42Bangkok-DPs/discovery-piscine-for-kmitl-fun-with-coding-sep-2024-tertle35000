#!/bin/bash

# ตรวจสอบจำนวนอาร์กิวเมนต์
if [ "$#" -gt 3 ]; then
    echo "Error: Too many arguments. Maximum is 3."
    exit 1
fi

# แสดงอาร์กิวเมนต์
echo "Arguments passed to the script:"
for arg in "$@"; do
    echo "$arg"
done
