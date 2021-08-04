// include iostream
#include <iostream>
// import hash library
#include "crypto/sha256.h"
// import database
#include "database/database.h"
// importFarmer class
#include "farmer-registration-form/thing.h"


// create main
int main()
{
    // create string
    std::string string = "Hello World!";
    // create hash
    std::string hash = crypto::sha256::hash(string);
    // print hash
    std::cout << hash << std::endl;
    // return success
    return 0;
}

bool validatePasswordHash(std::string hash, std::string password)
{   
    // create hashed password
    std::string hashedPassword = crypto::sha256::hash(password);
    // compare hashed password
    return hashedPassword == hash;
}


// create db connection
bool createConnection()
{
    // create database
    database db("farmer.db");
    // create connection
    return db.createConnection();
}
