import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font
} from "@react-pdf/renderer";

const MyBill = ({ products, amount, address }) => {
    
    Font.register({
        family: 'Ubuntu',
        fonts: [
          {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
          },
          {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
            fontWeight: 'bold',
          },
          {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
            fontWeight: 'normal',
            fontStyle: 'italic',
          },
        ],
      });

      Font.registerEmojiSource({
        format: 'png',
        url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
      });

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4",
      fontFamily:"Ubuntu"   
    },
    section: {
      marginTop: "5px",
    },
    textCenter: {
      textAlign: "center",
    },
    mainContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      border: "1px solid black",
      padding: "10px",
    },
    productsContainer: {
      display: "flex",
      flexDirection: "column",
    },
    productStyle: {
      display: "flex",
      flexDirection: "row",
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.textCenter}>
            Thank you For Shopping From Z-Bay 
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.textCenter}>Your Bill</Text>
        </View>
        <View style={styles.mainContainer}>
          <View>
            <Text>Your Purchases</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                marginTop: "10px",
              }}
            >
              {products &&
                products?.map((product) => {
                  return (
                    <View style={styles.productStyle} key={product?.id}>
                      <Image
                        src={product?.image_url}
                        style={{ width: 100, height: 100 }}
                      ></Image>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Text style={{ fontSize: "14px" }}>
                          {product?.name}
                        </Text>
                        <Text style={{ fontSize: "10px" }}>
                          ₹{product?.Price} X {product?.quantity}
                        </Text>
                        <Text>{product?.total}</Text>
                      </View>
                    </View>
                  );
                })}
            </View>
          </View>
          <View>
            <Text>Your Bill Summary</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                borderBottom: "1px solid black",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize:"12px"
                }}
              >
                <Text>Order Subtotal:-</Text>
                <Text>{amount ?? 0}</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize:"12px"
                }}
              >
                <Text>Discount:-</Text>
                <Text>0</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize:"12px"
                }}
              >
                <Text>Shipping:-</Text>
                <Text>0</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize:"12px"
              }}
            >
              <Text>Total</Text>
              <Text>{amount ?? 0}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: "10px" }}>
          <Text>Shipping Information</Text>
          <View
            style={{
              marginTop: "5px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize:"12px"
            }}
          >
            <Text>Full Name:- {address?.fullName}</Text>
            <Text>email:- {address?.email}</Text>
            <Text>Contact No.:- {address?.contactNo}</Text>
            <Text>
              Address:-{" "}
              {`${address?.addressLine1} , ${address?.city} , ${address?.zipcode}`}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyBill;
