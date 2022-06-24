FROM ravindu01manoj/core:v0.0.12

WORKDIR /root/Manoj-Md/
RUN git clone https://github.com/ravindu01manoj/Manoj-Md

ENTRYPOINT ["manoj-multi-device-whatsapp-start.sh"]