FROM ravindu01manoj/core:v0.0.17

RUN git clone https://github.com/ravindu01manoj/Manoj-Md $MANOJ_MULTI_DEVICE
WORKDIR $MANOJ_MULTI_DEVICE

ENTRYPOINT ["bash","manoj-multi-device-whatsapp-start.sh"]