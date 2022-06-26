FROM ravindu01manoj/core:v0.0.13

RUN git clone https://github.com/ravindu01manoj/Manoj-Md /root/Manoj-Md/
WORKDIR /root/Manoj-Md/

ENTRYPOINT ["manoj-multi-device-whatsapp-start.sh"]